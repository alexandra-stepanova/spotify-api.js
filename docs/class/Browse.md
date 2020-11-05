# Browse

All browse endpoints in the form of class
<h3 style="font-family: consolas;" id="constructor">constructor(<font style="opacity: 0.7; font-weight: light;">token?: string</font>)</h3>

> **Properties:** token<br>
> **Methods:** getCategory, getCategoryPlaylists, categories, featuredCategories, newReleases
```js
const browse = new Spotify.Browse('token');
```

---
## Properties
<h3 style="font-family: consolas; font-weight: lighter;" id="token">.token</h3>

> Your auth token<br>
> **Type:** [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string)

---
## Methods
<h3 style="font-family: consolas; font-weight: lighter;" id="getcategory">.getCategory(<font style="opacity: 0.7; font-weight: light;">id</font>)</h3>

> Returns the information about the category by the id provided.
> 
> | PARAMETER   | TYPE    | DESCRIPTION    |
> |--------|---------|----------------|
> | id | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string) | Id of the category |
> 
> **Returns:** [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/promise)<<font>any</font>>
<h3 style="font-family: consolas; font-weight: lighter;" id="getcategoryplaylists">.getCategoryPlaylists(<font style="opacity: 0.7; font-weight: light;">id, limit</font>)</h3>

> Returns the playlists about the category by the id provided.
> 
> | PARAMETER   | TYPE    | DESCRIPTION    |
> |--------|---------|----------------|
> | id | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string) | Id of the category |
> | limit | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number) | <font style="opacity: 07;">Optional. </font>Limit your results |
> 
> **Returns:** [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/promise)<<font>any</font>>
<h3 style="font-family: consolas; font-weight: lighter;" id="categories">.categories(<font style="opacity: 0.7; font-weight: light;">limit</font>)</h3>

> Returns the list of all categories.
> 
> | PARAMETER   | TYPE    | DESCRIPTION    |
> |--------|---------|----------------|
> | limit | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number) | <font style="opacity: 07;">Optional. </font>Limit your results |
> 
> **Returns:** [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/promise)<<font>any</font>>
<h3 style="font-family: consolas; font-weight: lighter;" id="featuredcategories">.featuredCategories(<font style="opacity: 0.7; font-weight: light;">limit</font>)</h3>

> Returns the list of all featured categories.
> 
> | PARAMETER   | TYPE    | DESCRIPTION    |
> |--------|---------|----------------|
> | limit | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number) | <font style="opacity: 07;">Optional. </font>Limit your results |
> 
> **Returns:** [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/promise)<<font>any</font>>
<h3 style="font-family: consolas; font-weight: lighter;" id="newreleases">.newReleases(<font style="opacity: 0.7; font-weight: light;">limit</font>)</h3>

> Returns the list of all new releases.
> 
> | PARAMETER   | TYPE    | DESCRIPTION    |
> |--------|---------|----------------|
> | limit | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number) | <font style="opacity: 07;">Optional. </font>Limit your results |
> 
> **Returns:** [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/promise)<<font>any</font>>