const constants = {
  linkedinUrl: import.meta.env.VITE_LINKEDIN_URL || "",
  githubUrl: import.meta.env.VITE_GITHUB_URL || "",
  audioFileUrl: import.meta.env.VITE_AUDIO_FILE_URL || "",
  emailEndpoint: import.meta.env.PROD
    ? import.meta.env.VITE_EMAIL_PRODUCTION_ENDPOINT
    : import.meta.env.VITE_EMAIL_DEVELOPMENT_ENDPOINT,
  isMobile:
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ),
};

export default constants;
