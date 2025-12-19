import Card from "../../components/Card/Card";
import Form from "../../components/Form/Form";
import Layout from "../../Layout/Layout";
import Hamburger from "../../assets/mdi--hamburger-menu.svg";

const Registration = () => {
  return (
    <Layout>
      <Card className="p-0! sm:py-6! md:py-12! absolute top-0 w-full h-full max-h-screen  overflow-auto sm:h-auto sm:top-1/2 sm:start-1/2 sm:-translate-1/2 sm:max-w-sm md:max-w-md   bg-white  flex flex-col gap-3   ">
        <div className="px-6 mb-5 flex w-full items-center justify-between sm:hidden">
          <Card.Title className="text-2xl">Logo</Card.Title>
          <button>
            <img src={Hamburger} alt="Hamburger Menu" />
          </button>
        </div>
        <Card.Header>
          <Card.Title className="text-2xl">Welcome</Card.Title>
          <Card.Description className="px-6">
            Fill the form below to create your account
          </Card.Description>
        </Card.Header>
        <Card.Content className="px-6">
          <Form />
        </Card.Content>
      </Card>
    </Layout>
  );
};

export default Registration;
