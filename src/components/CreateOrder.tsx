import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Container, TextField, Typography, List, ListItem, ListItemText, Autocomplete } from "@mui/material";
import axios from "axios";
import { IArticle } from "../models/IArticle";

const CreateOrder = () => {
    const { id } = useParams();
    const [ordererName, setOrdererName] = useState<string>('');
    const [articles, setArticles] = useState<IArticle[]>([]);
    const [newArticleDescription, setNewArticleDescription] = useState<string>('');
    const [allArticles, setAllArticles] = useState<IArticle[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3003/article/all")
            .then(response => {
                setAllArticles(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the articles:", error);
            });
    }, []);

    const onHandleClick = () => {
        axios.post(`http://localhost:3003/order/new?id=${id}`, {
            ordererName: ordererName,
        })
            .then(response => {
                const orderId = response.data.id;
                const articlePromises = articles.map(a =>
                    axios.post(`http://localhost:3003/article/add?order=${orderId}&article=${a.articleId}`)
                );
                return Promise.all(articlePromises);
            })
            .then(() => {
                console.log('Order and articles submitted successfully');
                navigate("/");
            })
            .catch(error => {
                console.error('There was an error submitting the order:', error);
            });
    };

    const handleAddArticle = () => {
        if (newArticleDescription.trim()) {
            const existingArticle = allArticles.find(article => article.description === newArticleDescription);
            if (existingArticle) {
                setArticles([...articles, existingArticle]);
                setNewArticleDescription('');
            } else {
                axios.post("http://localhost:3003/article/new", {
                    description: newArticleDescription
                })
                    .then(response => {
                        const newArticle: IArticle = {
                            articleId: response.data.articleId,
                            description: response.data.description,
                        };
                        setArticles([...articles, newArticle]);
                        setAllArticles([...allArticles, newArticle]);
                        setNewArticleDescription('');
                    })
                    .catch(error => {
                        console.error('There was an error adding the new article:', error);
                    });
            }
        }
    };

    return (
        <Container maxWidth="lg">
            <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                <Box flex={1} maxWidth="xs" className="form-container" mr={2}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Order erstellen
                    </Typography>
                    <TextField
                        label="Dein Name"
                        value={ordererName}
                        onChange={(e) => setOrdererName(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <Autocomplete
                        freeSolo
                        options={allArticles.map(article => article.description)}
                        getOptionLabel={(option) => typeof option === 'string' ? option : (option as IArticle).description}
                        onInputChange={(event, value) => setNewArticleDescription(value)}
                        renderInput={(params) => (
                            <TextField {...params} label="Artikelbeschreibung" margin="normal" fullWidth />
                        )}
                    />
                    <Button variant="contained" color="primary" fullWidth onClick={handleAddArticle} sx={{ mt: 2 }}>
                        Artikel hinzufügen
                    </Button>
                    <Button type="submit" variant="contained" color="primary" fullWidth onClick={onHandleClick} sx={{ mt: 2 }}>
                        Order bestellen
                    </Button>
                </Box>

                <Box flex={1} maxWidth="xs" className="form-container" mr={2} marginTop={12}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Hinzugefügte Artikel
                    </Typography>
                    <List>
                        {articles.map((article) => (
                            <ListItem key={article.articleId}>
                                <ListItemText primary={article.description} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Container>
    );
};

export default CreateOrder;
