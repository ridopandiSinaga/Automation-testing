const Rocket = require("./Rocket");
const RocketLauncher = require("./RocketLauncher");

describe("A RocketLauncher", () => {
  it("should launch all rocket", () => {
    const nasaRocket = new Rocket("Nasa");
    const spaceXRocket = new Rocket("SpaceX");
    const rocketLauncher = new RocketLauncher([nasaRocket, spaceXRocket]);

    rocketLauncher.launchAllRockets();

    expect(nasaRocket.engineStatus).toEqual("active");
    expect(spaceXRocket.engineStatus).toEqual("active");
    expect(rocketLauncher.rockets.length).toEqual(0);
  });

  it("should launch only one rocket by queue", () => {
    const nasaRocket = new Rocket("Nasa");
    const spaceXRocket = new Rocket("SpaceX");
    const rocketLauncher = new RocketLauncher([nasaRocket, spaceXRocket]);

    rocketLauncher.launchRocketByQueue();

    expect(nasaRocket.engineStatus).toEqual("active");
    expect(spaceXRocket.engineStatus).toEqual("inactive");
    expect(rocketLauncher.rockets.length).toEqual(1);
  });
});
