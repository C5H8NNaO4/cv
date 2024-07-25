import { EducationEntryProps } from "@/types";
import { ListItem, ListItemText } from "@mui/material";
import { useTranslation } from "react-i18next";

export const EducationEntry = (props: EducationEntryProps) => {
    const { school, degree, start, end } = props;
    const { t } = useTranslation();
    return (
        <ListItem>
            <ListItemText
                primary={`${start} - ${end}`}
                secondary={`${degree} ${t('at the')} ${school}`}
            />
        </ListItem>
    );
};