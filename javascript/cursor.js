document.addEventListener("DOMContentLoaded", () => {
    // Create custom cursor elements
    const customCursor = document.createElement("div");
    customCursor.id = "custom-cursor";
    document.body.appendChild(customCursor);

    const blade = document.createElement("div");
    blade.id = "blade";
    customCursor.appendChild(blade);

    let rotationSpeed = 5; // Default rotation speed (degrees per frame)
    let isRotating = false;
    let rotationAngle = 0;

    // Update cursor position
    document.addEventListener("mousemove", (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });

    // Handle mouse down event to extend the lightsaber blade
    document.addEventListener("mousedown", () => {
        blade.style.height = "100px"; // Extend blade
        const audio = document.getElementById("SaberActivate");
        audio.play();
    });

    // Handle mouse up event to retract the lightsaber blade
    document.addEventListener("mouseup", () => {
        blade.style.height = "0"; // Retract blade
        const audio = document.getElementById("SaberDeactivate");
        audio.play();
    });

    // Handle key down event to start/stop rotation
    document.addEventListener("keydown", (e) => {
        if (e.key === "r") {
            isRotating = !isRotating;
            if (isRotating) {
                requestAnimationFrame(rotateCursor);
            }
        }
    });

    // Function to rotate the cursor
    const rotateCursor = () => {
        if (isRotating) {
            rotationAngle = (rotationAngle + rotationSpeed) % 360;
            customCursor.style.transform = `rotate(${rotationAngle}deg)`;
            requestAnimationFrame(rotateCursor);
        }
    };

    // Function to change rotation speed
    const setRotationSpeed = (speed) => {
        rotationSpeed = speed;
    };

    setRotationSpeed(5); // Change this value to set a different rotation speed

    document.addEventListener("click", () => {
        if (blade.style.height === "0px" || blade.style.height === "") {
          blade.style.height = "100px";
          blade.style.background = "linear-gradient(to bottom, rgba(135, 31, 220, 0.8), rgba(137, 2, 247, 0.2))";
          blade.style.boxShadow = "0px 0px 20px 10px rgba(91, 7, 143, 0.5)";
        } else {
          blade.style.height = "0px";
          blade.style.background = "linear-gradient(to bottom, rgba(135, 31, 220, 0.0), rgba(135, 31, 220, 0.0))";
          setTimeout(() => {
            blade.style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0.0)";
          }, 200);
        }
      });
});


