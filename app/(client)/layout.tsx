import { find } from "@config/lib/api";

import Category from "@components/layout/Category";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Config = await find("Config");
  const Posts = await find("Posts ");

  const PostCategory = await find("PostCategory");
  const ProductCategory = await find("ProductCategory");
  const Products = await find("Products");

  return (
    <div lang="en">
      <main className=" d:w-[1400px] p:w-auto d:mx-auto p:mx-2  py-2 gap-4">
        <div className="col-span-3">{children}</div>

        {/* <div className="">
          <Category Posts={Posts} Products={Products} />
        </div> */}
      </main>
    </div>
  );
}
