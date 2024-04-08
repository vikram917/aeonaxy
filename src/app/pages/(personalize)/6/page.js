"use client"
import React, {useEffect} from 'react';
import Loading from "@/components/Loading";
import { page6 } from "@/utils/data"
import { useRouter } from 'next/navigation';

export default function Personalize() {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/pages/7');
    }, 3000); // Change delay time as needed (in milliseconds)
  }, []);

  return (
    <div className="flex justify-center items-center">
      <Loading img={page6.img} desc={page6.desc}/>
    </div>
  );
}
