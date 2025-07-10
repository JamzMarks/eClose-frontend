import React from 'react';
import ProfileStats from './ProfileStats';

export const ProfileHeader = () => {
  return (
    <div className="w-full bg-white shadow-sm">
      {/* Banner */}
      <div className="w-full h-40 bg-gray-200 relative">
        <img
          src="https://picsum.photos/200/300"
          alt="Banner"
          className="object-cover w-full h-full"
        />

        {/* Foto de perfil sobre o banner */}
        <div className="absolute left-4 -bottom-12">
          <img
            src="https://picsum.photos/200/300"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          />
        </div>
      </div>

      {/* Espaço para a foto não sobrepor conteúdo */}
      <div className="h-16" />

      {/* Nome + Nav */}
      <div className="px-4">
        <h1 className="text-xl font-semibold">Nome do Usuário</h1>
        <div>
        <ProfileStats/>
      </div>
        {/* Nav mockada */}
        <nav className="mt-4 border-b border-gray-200">
          <ul className="flex space-x-6 text-sm text-gray-600">
            <li className="pb-2 border-b-2 border-blue-600 font-medium text-blue-600">Posts</li>
            <li className="pb-2 hover:text-blue-600 cursor-pointer">Sobre</li>
            <li className="pb-2 hover:text-blue-600 cursor-pointer">Amigos</li>
            <li className="pb-2 hover:text-blue-600 cursor-pointer">Fotos</li>
          </ul>
        </nav>
      </div>
      
    </div>
  );
};
