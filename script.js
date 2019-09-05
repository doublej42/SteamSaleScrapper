/***
 * Sample Steam Search URL: https://store.steampowered.com/search/?category1=998%2C994%2C21&vrsupport=401%2C402&filter=weeklongdeals
 * Sample search  page 2:   https://store.steampowered.com/search/results?category1=998%2C994%2C21&vrsupport=401%2C402&filter=weeklongdeals&page=2
 */
function getGames()
{
    let currentUrl = window.location.href;
    let baseUrl = 'https://store.steampowered.com/search/?'
    if (!currentUrl.startsWith(baseUrl))
    {
        console.log('The current url is not a search page. Please go to a page that starts with '+ baseUrl)
    }
    var pageCount = jQuery('.pagebtn').prev('a').text()

    getPage(1,'https://store.steampowered.com/search/results?'+currentUrl.substr(baseUrl.length),pageCount);
    // defered.done(function(data){
    //     getPage(0,20,data,deferedB,'https://www.humblebundle.com/store/api/search?sort=alphabetical&filter=onsale&request=4&platform=vive');
    // });
    // deferedB.done(function(data){
    //     var keystable = jQuery('#keystable');
    //     if (keystable.length == 0)
    //     {
    //         keystable = jQuery('<div id="keystable" style="width: 90%; z-index:9001; background-color: white; height: 500px; overflow: scroll;;position: absolute; top:0; left 0;"></div>');
    //         jQuery('body').append(keystable);
    //     }
    //     else
    //     {
    //         keystable.empty();  
    //     }
    //     debugger;
    //     keystable.append("<div>Game Name | Price | % Off | Rift | Vive</div>");
    //     keystable.append("<div>---------|----------|--------|--------|--------</div>");
    //     jQuery.each(data,function(indexInArray,row){
    //         keystable.append("<div>"+row+"</div>")
    //     });

    // });
}

/**
 * 
 * @param {*} page Page Number
 * @param {*} baseUrl 
 * @param {*} pageCount 
 */
function getPage(page,baseUrl,pageCount)
{
    var nextUrl = baseUrl +  '&page=' + page;
    jQuery.get(nextUrl).done(function(data,textStatus)
    {

        console.log('getPage',textStatus)
        //var results= jQuery.parseHTML(data);
        //console.log(results)
        jQuery(data).find('#search_resultsRows .responsive_search_name_combined').each(function(index,element)
        {
            let name = jQuery(element).find('.title').text()
            //console.log(index,element)
            console.log(name)
        });
        

        // jQuery.each(data.results,function(indexInArray,value){
        //     if ((jQuery.inArray('oculus-rift',value.platforms) > -1) || (jQuery.inArray('vive',value.platforms) > -1))
        //     {
        //         var outputLine = '['+value.human_name+'](https://www.humblebundle.com/store/'+value.human_url+') | '+
        //         value.current_price[0]+' | '+
        //         Math.floor((1-(value.current_price[0]/value.full_price[0]))*100)+' | ';
        //         if (jQuery.inArray('oculus-rift',value.platforms) > -1)
        //         {
        //             outputLine += "Yes | "
        //         }
        //         else
        //         {
        //             outputLine += "    | "
        //         }
        //         if (jQuery.inArray('vive',value.platforms) > -1)
        //         {
        //             outputLine += "Yes | "
        //         }
        //         else
        //         {
        //             outputLine += "    | "
        //         }
        //         dataChain[value.human_url] = outputLine;
        //         //dataChain.push(outputLine);
        //     }
        // });
        // if (page < data.num_pages)
        // {
        //     getPage(page+1,page_size, dataChain,defered,baseUrl);
        // }
        // else
        // {
        //     defered.resolve(dataChain);
        // }

    },'html');
}

var hideOutput = getGames();
