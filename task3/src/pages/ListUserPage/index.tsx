import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from "@mui/material";
import { addPost, fetchPosts } from "../../store/actions/user";
import { RootState } from "../../store/store";

interface PostFormInputs {
  userId?: number;
  title: string;
  body: string;
}

const ListUserPage: React.FC = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state: RootState) => state.posts);

  const { register, handleSubmit, reset } = useForm<PostFormInputs>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const onSubmit: SubmitHandler<PostFormInputs> = (data) => {
    console.log(data);
    dispatch(addPost(data));
    handleClose();
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" gutterBottom>
          List User
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={handleOpen}
        >
          Create New Post
        </Button>
      </Box>

      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>UserId</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post: any) => (
                <TableRow key={post.id}>
                  <TableCell>{post.id}</TableCell>
                  <TableCell>{post.userId}</TableCell>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>{post.body}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={handleOpen}
      >
        Create New Post
      </Button>

      {/* Dialog for Creating New Post */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              label="ID"
              fullWidth
              margin="normal"
              type="number"
              {...register("id", { required: "ID is required" })}
            />
            <TextField
              label="Title"
              fullWidth
              margin="normal"
              {...register("title", { required: "Title is required" })}
            />
            <TextField
              label="Body"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              {...register("body", { required: "Body is required" })}
            />
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default ListUserPage;
