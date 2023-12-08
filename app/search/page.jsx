
import React from "react";
import Card from "../../components/searchpage/Card"
import Card1 from "../../components/searchpage/Card1"
import Filter from "../../components/searchpage/filter"
import style1 from "./search.module.css"

function page() {
  return (
    <div className="">
      <Filter/>
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-10">


        <Card image={"/anis.jpg"} name="Anis" detail="Calon Presiden Nomor Urut 1" link="/profile" urut='1' style="border-4 border-red-500 "/>
        <Card image={"/prabowo.jpeg"} name="Prabowo" detail="Calon Presiden Nomor Urut 2" link="/profile" urut='2' style={style1.maindiv}/>
        <Card image={"/ganjar.jpg"} name="Ganjar" detail="Calon Presiden Nomor Urut 2" link="/profile" urut='3'/>
        <Card image={"/anis.jpg"} name="Anis" detail="Calon Presiden Nomor Urut 1" link="/profile" urut='1' style="border-4 border-red-500"/>
        <Card image={"/prabowo.jpeg"} name="Prabowo" detail="Calon Presiden Nomor Urut 2" link="/profile" urut='2'/>
        <Card image={"/ganjar.jpg"} name="Ganjar" detail="Calon Presiden Nomor Urut 2" link="/profile" urut='3'/>

        <Card1 image={"/ganjar.jpg"} name="Ganjar" detail="Calon Presiden Nomor Urut 2" link="/profile" urut='3' style={style1.maindiv} style2={style1.maindiv2}/>
        </div>
    </div>

    </div>
  )
}

export default page;
