import React, { useState } from "react";
import { TextField, Chip, Box } from "@mui/material";

interface TagManagerProps {}

const TagManager: React.FC<TagManagerProps> = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  //   const [permanentTags, setPermanentTags] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <TextField
        label="Add Tag"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleAddClick}
      >
        {/* <Button variant="contained" onClick={handleAddClick}>
          Add
        </Button> */}
      </TextField>

      <Box mt={2}>
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            onDelete={() => {
              const tagsCopy = [...tags];
              setTags(tagsCopy);
            }}
          />
        ))}
      </Box>
    </div>
  );
};

export default TagManager;
