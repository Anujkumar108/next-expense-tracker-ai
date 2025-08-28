import { checkUser } from '@/lib/CheckUser';

export default function Navbar() {
    const user = checkUser();
  return <div>Navbar</div>;
}
