"use client";

import Template from "@/components/template";
import AddImageComponent from "@/components/ui/addImage";

export default function Page() {
  return (
    <>
      <Template>
        <section className={"my-2 flex flex-col items-center justify-center"}>
          <h1>Adicionar imagens</h1>
          <AddImageComponent />
        </section>
      </Template>
    </>
  );
}
