const constants = {
  linkedinUrl: import.meta.env.VITE_LINKEDIN_URL || "",
  githubUrl: import.meta.env.VITE_GITHUB_URL || "",
  audioFileUrl: import.meta.env.VITE_AUDIO_FILE_URL || "",
};

console.log(constants);

export default constants;
