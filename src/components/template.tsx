import TemplateProps from "@/types/templateProps";
import Header from "@/components/utils/header";
import Footer from "@/components/utils/footer";

export const Template = ({ children }: TemplateProps) => {
  return (
    <div>
      <Header />
      <div className={"container mx-auto mt-8 px-4"}>{children}</div>
      <Footer />
    </div>
  );
};

export default Template;
