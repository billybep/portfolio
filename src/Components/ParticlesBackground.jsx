import { Component } from "react";
import Particles,  { initParticlesEngine }  from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

class ParticlesBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: false,
      options: {
        background: {
          color: "#0d47a1",
            opacity: 0.1,
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
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }
    };
  }

  async componentDidMount() {
    await initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
    this.setState({ init: true });
  }

  render() {
    const { init, options } = this.state;
    
    return init ? (
      <Particles
        id="tsparticles"
        options={options}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1
        }}
      />
    ) : null;
  }
}

export default ParticlesBackground;