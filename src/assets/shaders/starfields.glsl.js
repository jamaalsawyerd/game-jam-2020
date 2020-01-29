---
name: RGB Shift Field
type: fragment
author: dpkaminski
---

precision highp float;

uniform float time;
uniform vec2 resolution;

#define iTime time
#define iResolution resolution

//modified version of https://www.shadertoy.com/view/4ljXDt

float Cell(vec2 c) {
    vec2 uv = fract(c);c -= uv;
    return (1.-length(uv*2.-1.)) * step(fract(sin(c.x+c.y*1e2)*1e3), .04);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 p = fragCoord.xy / iResolution.xy -.5;
    float a = fract(atan(p.x, p.y) / 6.2832);
    float d = length(p);
    float z = iTime / 1.5;
    vec3 col;
    
    for(int i=0; i<3 ;i++)
    {
        z += 0.02;
        vec2 coord = vec2(pow(d, .04), a)*256.;
        vec2 delta = vec2(1. + z*20., 1.);
        float c = Cell(coord-=delta);
        c += Cell(coord-=delta);
        col[i]=c*d*3.;
    }    
    
    fragColor = vec4(col,1);
}

void main(void)
{
    mainImage(gl_FragColor, gl_FragCoord.xy);
}