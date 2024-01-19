/* eslint-disable max-len */
const Rocket = require("./Rocket");
const RocketLauncher = require("./RocketLauncher");
const RocketRepairKit = require('./RocketRepairKit');

describe("A RocketLauncher", () => {
  // dummy example
  it("should launch all rockets", () => {
    // Arrange
    const nasaRocket = new Rocket("Nasa");
    const spaceXRocket = new Rocket("SpaceX");
    // dummy
    const rocketLauncher = new RocketLauncher({}, [nasaRocket, spaceXRocket]);

    // Action
    rocketLauncher.launchAllRockets();

    // Assert
    expect(nasaRocket.engineStatus).toEqual("active");
    expect(spaceXRocket.engineStatus).toEqual("active");
    expect(rocketLauncher.rockets.length).toEqual(0);
  });

  it("should launch only one rocket by queue", () => {
    // Arrange
    const nasaRocket = new Rocket("Nasa");
    const spaceXRocket = new Rocket("SpaceX");
    // dummy
    const rocketLauncher = new RocketLauncher({}, [nasaRocket, spaceXRocket]);

    // Action
    rocketLauncher.launchRocketByQueue();

    // Assert
    expect(nasaRocket.engineStatus).toEqual("active");
    expect(spaceXRocket.engineStatus).toEqual("inactive");
    expect(rocketLauncher.rockets.length).toEqual(1);
  });

  // stub example
  it('should return correct  result when repair cannot repair the rocket', async () => {
    // Arrange
    /**
     * stub! Kita butuh mengubah implementasi  fungsi untuk menghasilkan keadaan sesuai skenario uji.
     * Namun kita tidak menguji fungsi apapun  terkait fungsi yang diubah.
     */
    const fakeRocketRepairKit = {
      repair: () => Promise.reject('failed to repair the rocket'),
    };

    const rocketLauncher = new RocketLauncher(fakeRocketRepairKit, [{}]);

    // Action
    const result = await rocketLauncher.repairAllRockets();

    // Assert
    expect(result).toEqual('there was 1 of 1 rocket fail to repair');
  });

  // mock example
  it('should repair some repairable rocket when repair kit not repair some the rocket', async () => {
    // Arrange
    const repairableRocket = new Rocket('repairableRocket');
    const unripairableRocket = new Rocket('unripariableRocket');
    /**
     * mock! Kita butuh mengubah implementasi fungsi  untuk menghasilkan keaddan sesuai skenario uji.
     * Dan kita butuh untuk menguji apakah fungsi yang dijalankan/diperlukan.
     */
    const fakeRocketRepairKit = {
      repair: jest.fn().mockImplementation((rocket) => {
        if (rocket.name === 'repairableRocket') {
          return Promise.resolve();
        }

        return Promise.reject("failed ro repair the rocket");
      }), 
    }

    const rocketLauncher = new RocketLauncher(fakeRocketRepairKit, [repairableRocket, unripairableRocket]);

    // Action
    const result = await rocketLauncher.repairAllRockets();

    // Assert
    expect(result).toEqual(`there was 1 of 2 rocket fail to repair`);
    /**
     * memastikan bahwa fungsi repair terpanggil
     */
    expect(fakeRocketRepairKit.repair).toBeCalled();
    expect(fakeRocketRepairKit.repair).toBeCalledWith(repairableRocket);
  });
});
