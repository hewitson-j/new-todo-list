import React, { useState } from "react";
import { TextField, Chip, Box } from "@mui/material";

interface TagManagerProps {
  tags: string[];
  onTagsChange: (newTags: string[]) => void;
}

const TagManager: React.FC<TagManagerProps> = ({ tags, onTagsChange }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDeleteTag = (tagToDelete: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToDelete);
    onTagsChange(updatedTags);
  };

  const handleAddClick = () => {
    if (inputValue.trim() !== "") {
      const newTags = [...tags, inputValue];
      onTagsChange(newTags); // Call the callback to update tags in the parent component
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
      />
      <Box mt={2}>
        {tags.map((tag, index) => (
          <Chip key={index} label={tag} onDelete={() => handleDeleteTag(tag)} />
        ))}
      </Box>
    </div>
  );
};

export default TagManager;
