import { FC, Suspense } from "react";
import { TransitionGroup } from "react-transition-group";
import { Await, useLoaderData } from "react-router-dom";
import { Box, Fade } from "@mui/material";
import logo from "@/theme/assets/logo-app-4x.png";

export type LoaderFC<L = any> = FC<{ loaderData: L }>;

export function withRouterLoader<L>(Element: LoaderFC<L>) {
  const Wrapper: FC = () => {
    const loaderData: any = useLoaderData();

    const SuspenseFallback = () => {
      return (
        <TransitionGroup>
          <Fade>
            <Box
              sx={{
                width: "100vw",
                height: "100vh",
                background: "#fefefe",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box className="loader-1">
                <img src={logo} alt="loading" style={{ width: "80px", height: "auto" }} />
              </Box>
            </Box>
          </Fade>
        </TransitionGroup>
      );
    };

    return (
      <Suspense fallback={<SuspenseFallback />}>
        <Await resolve={loaderData.data}>
          {(resolveLoaderData) => <Element loaderData={resolveLoaderData} />}
        </Await>
      </Suspense>
    );
  };

  return Wrapper;
}
