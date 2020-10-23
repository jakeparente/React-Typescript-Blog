import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Article } from '../redux/model';

interface IArticleDialog {
    article: Article,
    setOpen: Function,
}
const ArticleDialog: React.FC<IArticleDialog> = ( {article, setOpen}: IArticleDialog ) => {
    const handleClose = () => {
        setOpen(null);
    }

    return (
        <Dialog 
          open={article !== null}
          onClose={handleClose}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          fullWidth
        >
          <DialogTitle id="scroll-dialog-title">{article?.title}</DialogTitle>
          <DialogContent >
            <DialogContentText
              id="scroll-dialog-description"
              tabIndex={-1}
            >
                {article?.body}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            X
          </Button>
          </DialogActions>
        </Dialog>
    )
}

export default ArticleDialog;