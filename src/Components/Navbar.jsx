"use client";
import React, { useState } from "react";
import "./Navbar.css";
import Image from "next/image";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
const Navbar = () => {
          const [isOpen, setOpen] = useState(false);
          const toggleMenu = () => {
                    setOpen(!isOpen);
          };
          return (
                    <>
                              <div
                                        id="main"
                                        className=" w-full h-20 flex items-center justify-between p-4"
                              >
                                        <div id="nav-part-1" className="bg-gray-100">
                                                  <div id="logo">
                                                            <Image src="/Images/logo.jpg" width={100} height={100} alt="img" />
                                                  </div>
                                        </div>
                                        <div
                                                  id="nav-part-2"
                                                  className="font-semibold text-[#2e2e2e] text-lg flex items-center justify-center list-none gap-16  "
                                        >
                                                  <Link href='/' className="cursor-pointer">Home</Link>
                                                  <Link href='/products' className="cursor-pointer">Products</Link>
                                                  <Link href='/quotes' className="cursor-pointer">Quotes</Link>
                                                  <Link href='/comments' className="cursor-pointer">Comments</Link>
                                                  <Link href='/' className="cursor-pointer">Explore</Link>
                                        </div>
                                        <div
                                                  id="nav-part-3 "
                                                  className="flex items-center justify-center gap-3"
                                        >
                                                  <div
                                                            id="btn"
                                                            className="md:flex hidden items-center justify-center gap-3  "
                                                  >
                                                            <button className="bg-slate-700 py-2 px-5 font-bold text-white rounded-md">
                                                                      Contact us
                                                            </button>
                                                            <button className="bg-slate-700 py-2 px-5 font-bold text-white rounded-md">
                                                                      Watch video
                                                            </button>
                                                  </div>
                                                  <div id="mobile-menu">

                                                            <Hamburger toggled={isOpen} toggle={toggleMenu} />
                                                            <div id="content" className={`transition-transform duration-300 ease-in-out ${isOpen ? 'block transform translate-y-0' : 'hidden transform -translate-y-full'} absolute top-20 left-0 w-full bg-black bg-opacity-5  border-b border-gray-200`}>
                                                                      <div className="p-4 flex flex-col items-center   py-3 gap-3">
                                                                                <div className="list-none px-10 text-2xl flex flex-col gap-5 my-3 ">
                                                                                          <Link href='/' className="py-2 cursor-pointer text-center font-semibold ">Home</Link>
                                                                                          <Link href='/products' className="py-2 cursor-pointer text-center font-semibold ">Products</Link>
                                                                                          <Link href='/quotes' className="py-2 cursor-pointer text-center font-semibold ">Quotes</Link>
                                                                                          <Link href='/comments' className="py-2 cursor-pointer text-center font-semibold ">Comments</Link>
                                                                                          <Link href='/' className="py-2 cursor-pointer text-center font-semibold ">Explore</Link>

                                                                                          <button className="bg-slate-700 py-2 px-5 font-bold text-white rounded-md">
                                                                                                    Contact us
                                                                                          </button>
                                                                                          <button className="bg-slate-700 py-2 px-5 font-bold text-white rounded-md">
                                                                                                    Watch video
                                                                                          </button>
                                                                                </div>

                                                                      </div>
                                                            </div>

                                                  </div>
                                        </div>
                              </div>
                    </>
          );
};

export default Navbar;
