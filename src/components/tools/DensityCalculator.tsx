import { useState } from "react";
import TextInput from "../input/TextInput";
import PrimaryButton from "../button/PrimaryButton";
import { calculateDensity } from "../../utils/math";
import { valueMaxDecimals } from "../../utils/number";
import PageTitle from "../text/PageTitle";

const DensityCalculator = () => {
  const [weight, setWeight] = useState<string | undefined>("");
  const [length, setLength] = useState<string | undefined>("");
  const [width, setWidth] = useState<string | undefined>("");
  const [height, setHeight] = useState<string | undefined>("");
  const [density, setDensity] = useState<number | undefined>(0);

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setWeight(value);
  };
  const handleLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLength(value);
  };
  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setWidth(value);
  };
  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setHeight(value);
  };

  const onCalculate = () => {
    if (!weight || !length || !width || !height) return;
    const density = calculateDensity(weight, length, width, height);
    setDensity(density);
  };

  return (
    <div>
      <div className="flex gap-4 md:flex-row flex-col">
        <div className="flex gap-4 flex-col md:max-w-60 w-full">
          <TextInput
            containerClassName="w-full"
            type="text"
            title="Weight"
            id="weight"
            name="weight"
            value={weight}
            onChange={handleWeightChange}
            placeHolder="Weigth in grams"
          />

          <TextInput
            containerClassName="w-full"
            type="text"
            title="Length"
            id="length"
            name="length"
            value={length}
            onChange={handleLengthChange}
            placeHolder="Length in mm"
          />

          <TextInput
            containerClassName="w-full"
            type="text"
            title="Width"
            id="width"
            name="width"
            value={width}
            onChange={handleWidthChange}
            placeHolder="Width in mm"
          />

          <TextInput
            containerClassName="w-full"
            type="text"
            title="Height"
            id="height"
            name="height"
            value={height}
            onChange={handleHeightChange}
            placeHolder="Height in mm"
          />
        </div>
        <div className="flex flex-1 items-center pb-6 px-6">
          <PageTitle title={valueMaxDecimals(density || 0) + "kg / m2"} />
        </div>
      </div>
      <div className="mt-4 md:max-w-60 w-full">
        <PrimaryButton
          label="Calculate"
          onClick={onCalculate}
          type="button"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default DensityCalculator;
