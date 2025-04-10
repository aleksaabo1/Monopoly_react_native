import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
    PinchGestureHandler,
    PinchGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedGestureHandler,
    useAnimatedStyle,
} from 'react-native-reanimated';

interface ZoomableBoardProps {
    children: ReactNode;
}

// Define the context types for pan and pinch gestures
type PanContext = {
    startX: number;
    startY: number;
};

type PinchContext = {
    startScale: number;
};

const ZoomableBoard: React.FC<ZoomableBoardProps> = ({ children }) => {
    // Shared values for scale and pan offsets
    const scale = useSharedValue(1);
    const offsetX = useSharedValue(0);
    const offsetY = useSharedValue(0);

    // Pan gesture handler
    const panGestureHandler = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        PanContext
    >({
        onStart: (_, context) => {
            context.startX = offsetX.value;
            context.startY = offsetY.value;
        },
        onActive: (event, context) => {
            offsetX.value = context.startX + event.translationX;
            offsetY.value = context.startY + event.translationY;
        },
    });

    // Pinch gesture handler
    const pinchGestureHandler = useAnimatedGestureHandler<
        PinchGestureHandlerGestureEvent,
        PinchContext
    >({
        onStart: (_, context) => {
            context.startScale = scale.value;
        },
        onActive: (event, context) => {
            scale.value = context.startScale * event.scale;
        },
    });

    // Animated style combining pan and zoom
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: offsetX.value },
            { translateY: offsetY.value },
            { scale: scale.value },
        ],
    }));

    return (
        <PanGestureHandler onGestureEvent={panGestureHandler}>
            <Animated.View style={{ flex: 1 }}>
                <PinchGestureHandler onGestureEvent={pinchGestureHandler}>
                    <Animated.View style={[styles.container, animatedStyle]}>
                        {children}
                    </Animated.View>
                </PinchGestureHandler>
            </Animated.View>
        </PanGestureHandler>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ZoomableBoard;
