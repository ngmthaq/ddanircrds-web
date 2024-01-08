import { FC, Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { CicurlarLoading } from "../common";

export type LoaderFC<L> = FC<{ loaderData: L }>;

export function withRouterLoader<L>(Element: LoaderFC<L>) {
  const Wrapper: FC = () => {
    const loaderData: any = useLoaderData();

    return (
      <Suspense fallback={<CicurlarLoading />}>
        <Await resolve={loaderData.data}>{(resolveLoaderData) => <Element loaderData={resolveLoaderData} />}</Await>
      </Suspense>
    );
  };

  return Wrapper;
}
