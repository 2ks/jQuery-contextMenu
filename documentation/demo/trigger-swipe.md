# Demo: Swipe Trigger

<span class="context-menu-one label label-default">swype right</span>

## Example code

<script type="text/javascript" class="showcase">
$(function(){
    // make swipe right open the menu
    $('.context-menu-one').swipe({
        // see http://labs.skinkers.com/touchSwipe/
        swipe: function(event, direction, distance, duration, fingerCount) {
            if (fingerCount === 1) {
                $(this).contextMenu({
                    x: event.changedTouches[0].screenX,
                    y: event.changedTouches[0].screenY,
                });
            }
        }
    });
    
    $.contextMenu({
        selector: '.context-menu-one', 
        trigger: 'none',
        callback: function(key, options) {
            var m = "clicked: " + key;
            window.console && console.log(m) || alert(m); 
        },
        items: {
            "edit": {name: "Edit", icon: "edit"},
            "cut": {name: "Cut", icon: "cut"},
            "copy": {name: "Copy", icon: "copy"},
            "fold1a": {
                "name": "Some submenu", 
                "items": {
                    "fold1a-key1": {"name": "echo"},
                    "fold1a-key2": {"name": "foxtrot"},
                    "fold1a-key3": {"name": "golf"}
                }
            }
        }
    });
});
</script>

## Example HTML
<div style="display:none;" class="showcase" data-showcase-import=".context-menu-one"></div>