import { collection, doc, getDocs, runTransaction } from "firebase/firestore";
import { firebaseFirestore } from "@/configs/firebase";
import iconFacebook from "@/theme/assets/icon-facebook.png";
import iconInstagram from "@/theme/assets/icon-instagram.png";
import iconYoutube from "@/theme/assets/icon-youtube.png";
import iconSpotify from "@/theme/assets/icon-spotify.png";
import iconSoundCloud from "@/theme/assets/icon-soundcloud.png";
import iconTiktok from "@/theme/assets/icon-tiktok.png";
import logoFacebook from "@/theme/assets/logo-facebook.png";
import logoInstagram from "@/theme/assets/logo-instagram.png";
import logoYoutube from "@/theme/assets/logo-youtube.png";
import logoSpotify from "@/theme/assets/logo-spotify.png";
import logoSoundCloud from "@/theme/assets/logo-soundcloud.png";
import logoTiktok from "@/theme/assets/logo-tiktok.png";
import { responseError, responseSuccess } from "../configs";
import { SocialModel } from "../models";

export async function getAllSocials() {
  try {
    const querySnapshot = await getDocs(collection(firebaseFirestore(), "socials"));
    const outputs: SocialModel[] = [];
    querySnapshot.forEach((snapshot) => {
      const data: any = snapshot.data();
      const images = getSocialImage(data.name);
      const model = new SocialModel(
        snapshot.id,
        data.name,
        data.profile,
        images.icon,
        images.logo,
        data.isOpen,
        data.order,
      );
      outputs.push(model);
    });
    outputs.sort((next, prev) => next.order - prev.order);
    return responseSuccess<SocialModel[]>(outputs);
  } catch (error) {
    return responseError(error);
  }
}

export async function updateSocialList(socials: SocialModel[]) {
  try {
    const transactionResult = await runTransaction(firebaseFirestore(), async (transaction) => {
      const outputs = socials.map(async (social) => {
        const documentRef = doc(firebaseFirestore(), "socials", social.id);
        const document = await transaction.get(documentRef);
        if (!document.exists()) throw new Error(`Document ${social.id} does not exist!`);
        transaction.update(documentRef, { profile: social.profile, isOpen: social.isOpen });
        return social;
      });
      return Promise.all(outputs);
    });
    return responseSuccess<SocialModel[]>(transactionResult);
  } catch (error) {
    return responseError(error);
  }
}

export async function updateSocial(social: SocialModel) {
  try {
    const transactionResult = await runTransaction(firebaseFirestore(), async (transaction) => {
      const documentRef = doc(firebaseFirestore(), "socials", social.id);
      const document = await transaction.get(documentRef);
      if (!document.exists()) throw new Error(`Document ${social.id} does not exist!`);
      transaction.update(documentRef, { profile: social.profile, isOpen: social.isOpen });
      return social;
    });
    return responseSuccess<SocialModel>(transactionResult);
  } catch (error) {
    return responseError(error);
  }
}

export function getSocialImage(name: string): { icon: string; logo: string } {
  if (name === "Facebook") return { icon: iconFacebook, logo: logoFacebook };
  if (name === "Instagram") return { icon: iconInstagram, logo: logoInstagram };
  if (name === "Youtube") return { icon: iconYoutube, logo: logoYoutube };
  if (name === "Spotify") return { icon: iconSpotify, logo: logoSpotify };
  if (name === "SoundCloud") return { icon: iconSoundCloud, logo: logoSoundCloud };
  if (name === "Tiktok") return { icon: iconTiktok, logo: logoTiktok };
  throw new Error("Cannot find social name");
}
