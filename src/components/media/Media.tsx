import { FloatModule, ArrowBackIcon, Button, CloseIcon } from "@/components/ui";
import Spotify from "./Spotify";
import YouTube from "./Youtube";

import { useMediaActions } from "@/hooks";

export default function Media() {
  const { closeModule, toggleVisibility, selectedMedia, currentModule } =
    useMediaActions();

  const mediaComponents: Record<string, JSX.Element> = {
    Spotify: <Spotify />,
    YouTube: <YouTube />,
  };
  console.log(currentModule);
  return (
    <FloatModule bounds="parent" cancel="button,#switch" allowAnyClick>
      <article className="flex flex-col items-center space-y-3 p-4 bg-primary rounded-lg w-[22rem] shadow-md select-none">
        <header className="w-full">
          <ul className="flex justify-between">
            <li className="flex items-center">
              <Button
                variant={"ghost"}
                onClick={() => toggleVisibility("Media")}
                disabled={selectedMedia.Media}
              >
                {!selectedMedia.Media && <ArrowBackIcon />}
              </Button>
            </li>
            <li className="flex items-center">
              <h2 className="text-lg font-bold text-primary">
                {currentModule}
              </h2>
            </li>
            <li className="flex items-center">
              <Button variant={"ghost"} onClick={() => closeModule("media")}>
                <CloseIcon />
              </Button>
            </li>
          </ul>
        </header>

        <div className="flex flex-col items-center justify-center space-y-4 w-full">
          <div className="w-full">
            {selectedMedia.Media ? (
              <ul className="flex text-primary justify-center gap-4">
                <li>
                  <Button onClick={() => toggleVisibility("YouTube")}>
                    YouTube
                  </Button>
                </li>
                <li>
                  <Button onClick={() => toggleVisibility("Spotify")}>
                    Spotify
                  </Button>
                </li>
              </ul>
            ) : (
              <div className="w-full text-center">
                <h2 className="text-lg font-semibold text-primary">
                  {mediaComponents[currentModule] || <p>No media selected</p>}
                </h2>
              </div>
            )}
          </div>
        </div>
      </article>
    </FloatModule>
  );
}
