"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 flex-center'>
        <Image src="/assets/images/logo.svg"
          alt="Logo"
          width={50}
          height={50}
          className="object-contain"
        />
        <p>Ruben Silva</p>
      </Link>


      {/* DESKTOP NAVIGATION */}
      <div className='sm:flex hidden'>
        <Link href="/contact" className='outline_btn md:gap-5'>
          Contactar
        </Link>
        <Link href="/cv" className='outline_btn md:gap-5'>
          Curriculum
        </Link>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href="/create-prompt" className='black_btn'>
              Criar Post
            </Link>
            <button
              type='button'
              onClick={() => {
                signOut();
                router.push('/');
              }} className="outline_btn">
              Terminar Sessão
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Iniciar Sessão
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile NAVIGATION */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <button
              type='button'
              onClick={() => {
                setToggleDropdown(false);
                signOut();
                router.push('/');
              }}
              className='mr-5 black_btn'
            >
              Encerrar Sessão
            </button>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />
            {toggleDropdown && (
              <div className='dropdown'>
                <ul>
                  <li><Link
                    href="/profile"
                    className='mt-2 outline_btn glassmorphism md:gap-5'
                    onClick={() => setToggleDropdown(false)}>
                    Meu Perfil
                  </Link>
                  </li> 
                  <li><Link href="/contact" className='mt-2 outline_btn glassmorphism md:gap-5'>Contactar</Link></li>
                  <li><Link href="/cv" className='mt-2 outline_btn glassmorphism md:gap-5'>Curriculum</Link></li>
                  <li>
                    <Link
                      href="/create-prompt"
                      className='mt-2 outline_btn glassmorphism md:gap-5'
                      onClick={() => setToggleDropdown(false)}
                    >
                      Criar Post
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <>
            <ul>
              <li><Link href="/contact" className='mt-2 outline_btn md:gap-5'>Contactar</Link></li>
              <li><Link href="/cv" className='mt-2 outline_btn md:gap-5'>Curriculum</Link></li>

              <li> {providers &&
                Object.values(providers).map((provider) =>
                (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className='mt-2 black_btn'
                  >
                    Iniciar Sessão
                  </button>
                ))}
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav;