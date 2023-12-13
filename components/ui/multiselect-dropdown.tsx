import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { StaticImageData } from "next/image";

interface MultiSelectDropdownProps {
    options: {
        value: string;
        label: string;
        icon: StaticImageData;
    }[];
    optionType: string;
    onChange?: (selectedValues: string[]) => void;
}

export function MultiSelectDropdown({
    options,
    optionType,
    onChange,
}: MultiSelectDropdownProps) {
    const [open, setOpen] = React.useState(false);
    const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

    const handleSelect = (currentValue: string) => {
        const newSelectedValues = selectedValues.includes(currentValue)
            ? selectedValues.filter((value) => value !== currentValue)
            : [...selectedValues, currentValue];

        setSelectedValues(newSelectedValues);

        // Notify parent component about the change
        if (onChange) {
            onChange(newSelectedValues);
        }
    };

    const isValueSelected = (value: string) => selectedValues.includes(value);

    const getSelectedLabels = () => {
        if (selectedValues.length === 0) return `Filter by ${optionType}`;
        if (selectedValues.length === 1) {
            return options.find((option) => option.value === selectedValues[0])?.label;
        }
        return `${selectedValues.length} ${optionType}s selected`;
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    {getSelectedLabels()}
                    <div
                        className="flex items-center gap-2"
                    >
                        {
                            selectedValues.length > 0 &&
                            <X className="ml-2 h-4 w-4 shrink-0 opacity-50"
                                onClick={() => {
                                    setSelectedValues([]);
                                    if (onChange) {
                                        onChange([]);
                                    }
                                }}
                            />}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder={`Filter by ${optionType}`} />
                    <CommandEmpty>No {optionType} found.</CommandEmpty>
                    <CommandGroup>
                        {options.map((option) => (
                            <CommandItem
                                key={option.value}
                                value={option.value}
                                onSelect={() => handleSelect(option.value)}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        isValueSelected(option.value) ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {option.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
