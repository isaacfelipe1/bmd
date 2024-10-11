import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Header from '../../components/header';

const ComoChegarPage = () => {
  const content = {
    title: 'Biblioteca Maria Dolores Chico Xavier',
    description:
      'Veja como chegar à biblioteca e aproveitar o que ela oferece.',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Header
        title={content.title}
        description={content.description}
        className="w-full h-[500px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/como_chegar_fundo.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </Header>
      <div className="flex-grow w-full px-4 py-8">
        <p>Em construção</p>
      </div>
      <Footer />
    </div>
  );
};

export default ComoChegarPage;
