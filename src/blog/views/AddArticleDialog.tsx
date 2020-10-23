import React from 'react';
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@material-ui/core';
import { actions } from '../redux/model'
import { useDispatch } from 'react-redux';

interface IAddArticleDialog {
    open: boolean,
    setOpen: Function,
}
const AddArticleDialog: React.FC<IAddArticleDialog> = ( {open, setOpen}: IAddArticleDialog ) => {

  const [article, setValues] = React.useState({
    title: '',
    body: '',
  });

  const handleChange = (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...article, [prop]: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const handleSubmit = () => {
    setOpen(false);
    dispatch(actions.addArticle({
        author: "Jake Parente",
        title: article.title,
        body: article.body,
        date: new Date(),
    }));
}

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            onChange={handleChange('title')}
          />
          <TextField
            id="filled-multiline-flexible"
            label="Body"
            multiline
            rowsMax={30}
            variant="filled"
            fullWidth
            onChange={handleChange('body')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Upload
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default AddArticleDialog