'use client'; // Wajib karena menggunakan useState untuk fitur Edit Profile

import { useState } from 'react';

export default function ProfilePage() {
  // 1. Simpan data profil dalam state agar nanti bisa di-edit
  const [profile, setProfile] = useState({
    displayName: 'Nanaa',
    username: 'nana',
    bio: 'Mahasiswa Computer Science | UI/UX Enthusiast & Web Developer',
    location: 'Indonesia',
    joinDate: 'Januari 2026',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nanda', // Avatar placeholder
  });

  // State untuk kontrol Modal Edit Profile
  const [isEditing, setIsEditing] = useState(false);
  
  // State sementara untuk menampung input form saat mengedit
  const [formData, setFormData] = useState({ ...profile });

  // Fungsi untuk menyimpan hasil edit
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(formData);
    setIsEditing(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        
        {/* === HEADER & AVATAR === */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-gray-100">
          <div className="relative w-28 h-28 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow">
            <img
              src={profile.avatarUrl}
              alt={profile.displayName}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900">{profile.displayName}</h1>
            <p className="text-gray-500 text-sm">@{profile.username}</p>
            
            <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                📍 {profile.location}
              </span>
              <span className="flex items-center gap-1">
                📅 Bergabung {profile.joinDate}
              </span>
            </div>
          </div>

          {/* === TOMBOL EDIT PROFILE === */}
          <div>
            <button
              onClick={() => {
                setFormData({ ...profile });
                setIsEditing(true);
              }}
              className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* === BIO === */}
        <div className="py-6 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Bio</h2>
          <p className="text-gray-700 leading-relaxed">
            {profile.bio || 'Belum ada bio.'}
          </p>
        </div>

      </div>

      {/* === MODAL FORM EDIT PROFILE === */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Edit Profile</h2>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Display Name</label>
                <input
                  type="text"
                  value={formData.displayName}
                  onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Username</label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Bio</label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Lokasi</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}