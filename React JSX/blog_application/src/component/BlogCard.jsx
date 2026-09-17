import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/material";

const BlogCard = ({ data, onEdit, onDelete }) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 380,
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.18)",
        },
      }}
    >
      {/* Blog Image */}
      {data.blogImgUrl && (
        <CardMedia
          component="img"
          height="220"
          image={data.file}
          alt={data.title}
          sx={{
            objectFit: "cover",
          }}
        />
      )}

      <CardContent sx={{ p: 3 }}>
        {/* Title */}
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{
            mb: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {data.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            lineHeight: 1.7,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {data.description}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            gap: 1.5,
          }}
        >
          <Button variant="contained" fullWidth onClick={() => onEdit(data)}>
            Edit
          </Button>

          <Button
            variant="outlined"
            color="error"
            fullWidth
            onClick={() => onDelete(data)}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
