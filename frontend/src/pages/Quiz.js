useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        alert("Switching tabs is not allowed!");
        // Optionally, submit the quiz or penalize the user.
      }
    };
  
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);


  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        const video = document.createElement("video");
        video.srcObject = stream;
        video.play();
        document.body.appendChild(video);
      })
      .catch((err) => {
        console.error("Error accessing webcam:", err);
      });
  }, []);