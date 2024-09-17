import { useState } from "react";
import TextInput from "../input/TextInput";
import DefaultSwitch from "../input/Switch";
import Paragraph from "../text/Paragraph";
import { valueMaxDecimals } from "../../utils/number";

const InchConverter = () => {
  const inchInMm = 25.4;
  const [mode, setMode] = useState<"decimal" | "fractional">("decimal");
  const [inches, setInches] = useState(0);
  const [millimeters, setMillimeters] = useState(0);
  const [totalFractions, setTotalFractions] = useState(0);
  const [fractions, setFractions] = useState(0);
  // Convert inches to millimiters both in decimal and fractional
  const inchesInMm = inches * inchInMm;

  const handleInchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    const mm = value * inchInMm;

    // maximum three decimals
    const roundedMm = valueMaxDecimals(mm);

    const roundedInches = valueMaxDecimals(roundedMm / inchInMm);

    setInches(roundedInches);
    setMillimeters(roundedMm);
  };
  const handleMillimeterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value);
    const newInches = value / inchInMm;
    // maximum three decimals
    const roundedInches = valueMaxDecimals(newInches);

    setMillimeters(value);
    setInches(roundedInches);
    setFractions(0);
    setTotalFractions(0);
  };
  const handleTotalFractionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newTotalFraction = Number(event.target.value);
    const fractionalInchParts = inchInMm / newTotalFraction;
    const multiplier = fractions;
    const fractialValue = fractionalInchParts * multiplier;
    const mm = inchesInMm + fractialValue;

    setTotalFractions(Number(event.target.value));
    setMillimeters(valueMaxDecimals(mm));
  };
  const handleFractionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFractions = Number(event.target.value);
    const fractionalInchParts = inchInMm / totalFractions;
    const multiplier = newFractions;
    const fractialValue = fractionalInchParts * multiplier;
    const mm = inchesInMm + fractialValue;

    setFractions(Number(newFractions));
    setMillimeters(valueMaxDecimals(mm));
  };

  const handleModeSwitch = (checked: boolean) => {
    if (checked) {
      setMode("fractional");
    } else {
      setMode("decimal");
    }
  };

  return (
    <div>
      <div className="mt-4 mb-12 flex items-center gap-2">
        <Paragraph>Decimal</Paragraph>
        <DefaultSwitch
          enabled={mode === "fractional"}
          onChange={handleModeSwitch}
        />
        <Paragraph>Fractional</Paragraph>
      </div>
      <div className="flex flex-col gap-4">
        <Paragraph className="mt-4 font-bold">Inches</Paragraph>

        <div className="flex gap-4 items-center">
          <TextInput
            containerClassName="max-w-20"
            type="number"
            title="Inches"
            value={inches}
            onChange={handleInchChange}
            placeHolder="Inches"
          />
          {mode === "fractional" && (
            <div className="flex gap-4 items-center">
              <TextInput
                containerClassName="max-w-20"
                type="number"
                title="Fraction"
                value={fractions}
                onChange={handleFractionChange}
                placeHolder="Fraction"
              />
              /
              <TextInput
                containerClassName="max-w-20"
                type="number"
                title="Parts"
                value={totalFractions}
                onChange={handleTotalFractionChange}
                placeHolder="Parts"
              />
            </div>
          )}
        </div>
        <Paragraph className="mt-4 font-bold">Millimeters</Paragraph>
        <TextInput
          containerClassName="max-w-20"
          type="number"
          title="Mm"
          value={millimeters}
          onChange={handleMillimeterChange}
          placeHolder="mm"
        />
      </div>
    </div>
  );
};

export default InchConverter;
