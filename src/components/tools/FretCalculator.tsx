import { useState } from "react";
import { valueMaxDecimals } from "../../utils/number";
import TextInput from "../input/TextInput";
import PrimaryButton from "../button/PrimaryButton";
type FretData = {
  fretNumber: number;
  distanceFromPreviousFret: number;
  distanceToNut: number;
};
const calculateFrets = (numOfFrets: number, scaleLength: number) => {
  const fretSpacingFactor = 17.817154;
  const fretSpacings: FretData[] = [];
  let remainingScale = scaleLength;

  for (let i = 0; i < numOfFrets; i++) {
    const fretPosition = remainingScale / fretSpacingFactor;
    remainingScale -= fretPosition;
    const distanceToNut = scaleLength - remainingScale;

    fretSpacings.push({
      fretNumber: i + 1,
      distanceFromPreviousFret: valueMaxDecimals(fretPosition),
      distanceToNut: valueMaxDecimals(distanceToNut),
    });
  }

  return fretSpacings;
};

const FretCalculator = () => {
  const [scaleLength, setScaleLength] = useState(635);
  const [numOfFrets, setNumOfFrets] = useState(20);
  const [frets, setFrets] = useState<FretData[]>([]);
  const handleCalculate = () => {
    setFrets(calculateFrets(numOfFrets, scaleLength));
  };
  const handleNumOfFretsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNumOfFrets(Number(event.target.value));
  };
  const handleScaleLengthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setScaleLength(Number(event.target.value));
  };
  return (
    <div className="flex w-full flex-wrap">
      <div className="md:w-1/2 w-full py-6">
        <div className="flex flex-col gap-6 md:w-1/2 w-full">
          <TextInput
            containerClassName="w-full"
            placeHolder="Scale length"
            title="Scale length"
            type="number"
            value={scaleLength}
            onChange={handleScaleLengthChange}
          />
          <TextInput
            containerClassName="w-full"
            placeHolder="Number of frets"
            title="Number of frets"
            type="number"
            value={numOfFrets}
            onChange={handleNumOfFretsChange}
          />
          <PrimaryButton
            label="Calculate"
            type="button"
            onClick={handleCalculate}
          />
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
              >
                Fret number
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Distance to nut (mm)
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Fret to fret (mm)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {frets.map((fret) => (
              <tr key={fret.fretNumber}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                  {fret.fretNumber}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {fret.distanceToNut}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {fret.distanceFromPreviousFret}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FretCalculator;
