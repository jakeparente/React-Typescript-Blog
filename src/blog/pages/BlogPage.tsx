import React from 'react';
import {
  makeStyles,
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Avatar,
  Button,
} from '@material-ui/core';
import ArticleDialog from "../views/ArticleDialog";
import AddArticleDialog from "../views/AddArticleDialog";
import store from '../redux/store'

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  blogBody: {
    height: 60,
    overflow: "hidden"
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex"
  },
  button: {
    width: 395,
    height: 400,
  }
}));

const heyAutoImage = "https://camo.githubusercontent.com/57219b54c884a159ee0242a9a181f84a861ea41e/68747470733a2f2f6865796175746f2e626c6f622e636f72652e77696e646f77732e6e65742f6d656469612f646f74626f742e706e67"

const BlogPage: React.FC = () => {
  const classes = useStyles();
  const articles = store.getState();

  const [openArticle, setOpenArticle] = React.useState(null);
  const [openAddArticle, setOpenAddArticle] = React.useState(false);

  const handleClick = () => {
    setOpenAddArticle(true);
  }

  const handleClickOpenArticle = (article: any) => () => {
    setOpenArticle(article);
  }

  return (
    <div className="App">
      <Box className={classes.hero}>
        <Box>HeySchmauto Blog</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          {articles.map((article) => {
            return (
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card} onClick={handleClickOpenArticle(article)}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={heyAutoImage}
                    title="Waving yellow dude"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {article.title}
                    </Typography>
                    <Typography className={classes.blogBody} variant="body2" color="textSecondary" component="p">
                      {article.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    <Box ml={2}>
                      <Typography variant="subtitle2" component="p">
                        {article.author}
                      </Typography>
                      <Typography variant="subtitle2" color="textSecondary" component="p">
                        {article.date ? article.date.toDateString() : "No date"}
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                  </Box>
                </CardActions>
              </Card>
          </Grid>
            );
          })}
          <Grid item xs={12} sm={6} md={4}>
            <Button className={classes.button} color="primary" onClick={handleClick}>
              <Typography variant='h2'> + </Typography>
            </Button>
          </Grid>
        </Grid>
        <AddArticleDialog open={openAddArticle} setOpen={setOpenAddArticle}/>
        <ArticleDialog article={openArticle} setOpen={setOpenArticle} />
      </Container>
    </div>
  );
}

export default BlogPage;
