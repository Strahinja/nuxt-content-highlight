
function applyHighlight(node, h, _v, options)
{
    const { 
        caseSensitive,
        highlightText, 
        highlightClassName,
    } = options;
    if (highlightText.length>0 && node)
    {
        if (node.text && node.text.length >= highlightText.length)
        {
            let result = [];
            let i = 0;
            let textSoFar = '';
            while (i < node.text.length)
            {
                const compareText = node.text.substring(
                    i,
                    i+highlightText.length
                );
                if ((caseSensitive && compareText===highlightText)
                    || (!caseSensitive 
                        && compareText.toLowerCase()===highlightText.toLowerCase()))
                {
                    if (textSoFar.length > 0)
                    {
                        result.push(_v(String(textSoFar)));
                    }
                    result.push(h('span', {
                        class: String(highlightClassName)
                    }, String(compareText))); // ignore case
                    textSoFar = '';
                    i += highlightText.length;
                }
                else
                {
                    textSoFar += node.text.substring(i, i+1);
                    i++;
                }
            }
            if (textSoFar.length>0)
            {
                result.push(_v(String(textSoFar)));
            }
            return result;
        }
        if (node.children && node.children.length>0)
        {
            let children = [];
            node.children.forEach(child =>
            {
                const result = applyHighlight(child, h, _v, options);
                if (Array.isArray(result))
                {
                    children = children.concat(result);
                }
                else
                {
                    children.push(result);
                }
            });
            node.children = children;
        }
    }
    return node;
}

import NuxtContent from '@nuxt/content/lib/templates/nuxt-content.js';
import Vue from 'vue';

export default {
    name: 'NuxtContentHighlight',
    functional: true,
    props: {
        caseSensitive: {
            type: Boolean,
            required: false,
            default: false,
        },
        document: {
            type: Object,
            required: true
        },
        highlightText: {
            type: String,
            required: false,
            default: '',
        },
        highlightClassName: {
            type: String,
            required: false,
            default: 'highlight',
        },
    },

    render (h, { data, props })
    {
        const { 
            caseSensitive,
            document, 
            highlightText, 
            highlightClassName 
        } = props;
        const { body } = document || {};
        if (!body || !body.children || !Array.isArray(body.children))
        {
            return;
        }
        data.props = Object.assign({ ...body.props }, data.props);
        const options = {
            caseSensitive,
            highlightText,
            highlightClassName,
        };
        return applyHighlight(NuxtContent.render(h, { data,
            props }), h, Vue.prototype._v, options);
    }
};

