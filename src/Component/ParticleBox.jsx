import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const particleBox = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#1E293B", // A solid dark blue-gray color to fit the theme
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 2, // Slightly increased particles added on click
          },
          repulse: {
            distance: 180, // Moderate distance for repulsion effect
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#60A5FA", // A light blue color to match the gradient-inspired theme
        },
        links: {
          color: "#60A5FA",
          distance: 140, // Balanced link distance for a compact effect
          enable: true,
          opacity: 0.6,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 4, // Moderate speed for fluid motion
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1000, // Ensures proper density across different screen sizes
          },
          value: 180, // Optimal particle count for balance
        },
        opacity: {
          value: 0.5, // Consistent opacity for a soft glow effect
        },
        shape: {
          type: "circle", // Simple and clean
        },
        size: {
          value: { min: 2, max: 6 }, // Slightly varied sizes for depth
        },
      },
      detectRetina: true,
    }
    ),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default particleBox;