import Card from "../../components/Card/Card";
import Form from "../../components/Form/Form";
import Layout from "../../Layout/Layout";

const Registration = () => {
  return (
    <Layout>
      <Card className=" border-0 sm:border p-0! sm:py-6! md:py-12! absolute top-24 w-full h-full max-h-screen  overflow-auto sm:h-auto sm:top-1/2 sm:start-1/2 sm:-translate-1/2 sm:max-w-sm md:max-w-md   bg-white  flex flex-col gap-3   ">
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
