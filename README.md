# Practice Backend

### Global Catches

```javascript
// Global Catches [Now other errors will be hidden only this message will be showed up]

app.use(function(err,req,res,next){
    res.json({
        msg : "Sorry!!Something is up with our server!"
    })
})
```