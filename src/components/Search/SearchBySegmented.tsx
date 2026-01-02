import * as RadioGroup from "@radix-ui/react-radio-group";


export type SearchBy = "title" | "author" | "publisher" | "isbn" | "tags";

type Props = {
    value: SearchBy;
    onChange: (value: SearchBy) => void;
};

const options: { label: string; value: SearchBy }[] = [
    { label: "Title", value: "title" },
    { label: "Author", value: "author" },
    { label: "Publisher", value: "publisher" },
    { label: "ISBN", value: "isbn" },
    { label: "Tags", value: "tags" },
];

export function SearchBySegmented({ value, onChange }: Props) {
    return (
        <div className="search-controls">
            <RadioGroup.Root
                className="segmented"
                value={value}
                onValueChange={(v) => onChange(v as SearchBy)}
                aria-label="Search by"
            >
                {options.map((opt) => (
                    <RadioGroup.Item key={opt.value} className="seg" value={opt.value}>
                        <span className="segLabel">{opt.label}</span>
                    </RadioGroup.Item>
                ))}
            </RadioGroup.Root>
        </div>
    );
}


