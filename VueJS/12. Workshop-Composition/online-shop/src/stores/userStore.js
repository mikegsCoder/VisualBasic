import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const isAuthenticated = ref(false);
  const profile = ref(null);
  const favouritesIDs = ref([]);

  function setProfile(profileData) {
    profile.value = profileData;
    isAuthenticated.value = true;
    sessionStorage.setItem('user-profile', JSON.stringify(profileData));
  }

  return {
    isAuthenticated,
    profile,
    favouritesIDs,
    setProfile,
  };
});
