import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation';
export default function ItemPage() {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  return (
    <>
      <h1>Menu Item Number {id}</h1>
    </>
  );
}
