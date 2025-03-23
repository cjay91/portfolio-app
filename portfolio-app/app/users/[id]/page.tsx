'use client';

import { useRouter } from 'next/navigation';

export default function UserProfile({params}:{params:{id:string}}) {
  const router = useRouter();
  const { id } = params;

return <div><h1>User Profile: {id}</h1></div>;
}