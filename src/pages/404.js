import { LayoutView } from "@/components/layout";

const NotFound = () => {
  return (
    <LayoutView>
      <div class="h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl uppercase font-bold pb-4">Page Not Found</h1>
        <p className="text-lg">{`Sorry, the page you're looking for doesn't exist.`}</p>
      </div>
    </LayoutView>
  );
};

export default NotFound;
