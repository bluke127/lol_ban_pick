import Form from '@/components/FormRow';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <Header />
        <Form />
      </div>
    </div>
  );
}
