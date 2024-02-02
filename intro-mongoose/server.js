Tweet.find({}, "title body author")
    .then(allTweets => console.log 
        (allTweets))
    .catch(error => console.error(error))
    .finally(() => db.close()) ; 