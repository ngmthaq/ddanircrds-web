import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { ApiConst } from "@/configs/const";
import { firebaseAuth } from "@/configs/firebase";
import { CredentialModel, UserModel } from "@/api/models";
import { responseError, responseSuccess } from "@/api/configs";

export async function login(credential: CredentialModel) {
  try {
    await setPersistence(firebaseAuth(), browserSessionPersistence);
    const userCredential = await signInWithEmailAndPassword(
      firebaseAuth(),
      credential.email,
      credential.password,
    );
    const user = userCredential.user;
    if (!user.email) return responseError(new Error("Email is not defined"));
    const userModel = new UserModel(user.email, user.uid);
    return responseSuccess<UserModel>(undefined, userModel);
  } catch (error) {
    return responseError(error);
  }
}

export async function logout() {
  try {
    await signOut(firebaseAuth());
    return responseSuccess(undefined, true);
  } catch (error) {
    return responseError(error);
  }
}

export function handleErrorMessage(code: string) {
  let defaultMessage = code;
  switch (code) {
    case ApiConst.FIREBASE_AUTH_ERRORS.auth_argument_error:
      defaultMessage = "Thrown if a method is called with incorrect arguments";
      break;

    case ApiConst.FIREBASE_AUTH_ERRORS.auth_app_deleted: {
      defaultMessage = "Thrown if the instance of FirebaseApp has been deleted.";
      break;
    }

    case ApiConst.FIREBASE_AUTH_ERRORS.auth_invalid_api_key: {
      defaultMessage =
        "Thrown if the provided API key is invalid. Please check that you have copied it correctly from the Firebase Console.";
      break;
    }

    case ApiConst.FIREBASE_AUTH_ERRORS.auth_multi_factor_auth_required: {
      defaultMessage = "auth/multi-factor-auth-required";
      break;
    }

    case ApiConst.FIREBASE_AUTH_ERRORS.auth_invalid_tenant_id: {
      defaultMessage = "Thrown if the tenant ID provided is invalid.";
      break;
    }

    case ApiConst.FIREBASE_AUTH_ERRORS.auth_app_not_authorized: {
      defaultMessage =
        "Thrown if the app identified by the domain where it's hosted, " +
        "is not authorized to use Firebase Authentication with the provided API key. " +
        "Review your key configuration in the Google API console.";
      break;
    }

    case ApiConst.FIREBASE_AUTH_ERRORS.auth_invalid_user_token: {
      defaultMessage =
        "Thrown if the user's credential is no longer valid. The user must sign in again.";
      break;
    }

    case ApiConst.FIREBASE_AUTH_ERRORS.auth_network_request_failed: {
      defaultMessage =
        "Thrown if a network error (such as timeout, interrupted connection or unreachable host) has occurred.";
      break;
    }

    case ApiConst.FIREBASE_AUTH_ERRORS.auth_operation_not_allowed: {
      defaultMessage =
        "Thrown if you have not enabled the provider in the Firebase Console. " +
        "Go to the Firebase Console for your project, " +
        "in the Auth section and the Sign in Method tab and configure the provider.";
      break;
    }

    case ApiConst.FIREBASE_AUTH_ERRORS.auth_requires_recent_login: {
      defaultMessage =
        "Thrown if the user's last sign-in time does not meet the security threshold. " +
        "Use firebase.User.reauthenticateWithCredential to resolve. " +
        "This does not apply if the user is anonymous.";
      break;
    }

    case ApiConst.FIREBASE_AUTH_ERRORS.auth_too_many_requests: {
      defaultMessage =
        "Thrown if requests are blocked from a device due to unusual activity. Trying again after some delay would unblock.";
      break;
    }

    case ApiConst.FIREBASE_AUTH_ERRORS.auth_unauthorized_domain: {
      defaultMessage =
        "Thrown if the app domain is not authorized for OAuth operations for your Firebase project. " +
        "Edit the list of authorized domains from the Firebase console.";
      break;
    }

    case ApiConst.FIREBASE_AUTH_ERRORS.auth_user_disabled: {
      defaultMessage =
        "Thrown if the user account has been disabled by an administrator. " +
        "Accounts can be enabled or disabled in the Firebase Console, " +
        "the Auth section and Users subsection.";
      break;
    }

    case ApiConst.FIREBASE_AUTH_ERRORS.auth_user_token_expired: {
      defaultMessage =
        "Thrown if the user's credential has expired. " +
        "This could also be thrown if a user has been deleted. " +
        "Prompting the user to sign in again should resolve this for either case.";
      break;
    }

    case ApiConst.FIREBASE_AUTH_ERRORS.auth_web_storage_unsupported: {
      defaultMessage =
        "Thrown if the browser does not support web storage or if the user disables them.";
      break;
    }

    case ApiConst.FIREBASE_AUTH_ERRORS.auth_invalid_credential: {
      defaultMessage = "Wrong email or password, please try again.";
      break;
    }

    default: {
      defaultMessage = code;
    }
  }
  return defaultMessage;
}
