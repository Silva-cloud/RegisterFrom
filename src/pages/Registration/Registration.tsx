import Card from "../../components/Card/Card";
import Form from "../../components/Form/Form";
import Layout from "../../Layout/Layout";

const Registration = () => {
  return (
    <Layout>
      <Card className="p-12 absolute top-1/2 start-1/2 bg-white -translate-1/2 flex flex-col gap-3 w-1/3">
        <Card.Header>
          <Card.Title className="text-3xl">Welcome</Card.Title>
          <Card.Description>
            Fill the form below to create your account
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <Form />
        </Card.Content>
      </Card>
    </Layout>
  );
};

export default Registration;
