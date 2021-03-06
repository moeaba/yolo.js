import { Injectable } from '@angular/core';
import {
	ClassifierConfig,
	darknet19Config,
	darknet9000Config,
	darknetRefrenceConfig,
	darknetTinyConfig,
	YOLOV3Config,
	YOLOV2TinyConfig,
	YOLOV3TinyConfig,
	YOLODetectorConfig,
	YOLOLiteConfig,
} from '@hiddentn/yolo.js';

@Injectable({
	providedIn: 'root',
})
export class ModelsService {
	baseURL:string = "https://raw.githubusercontent.com/TheHidden1/YOLO.JS.Weights/master/"
	constructor() {}

	public getDetectorConfig(modelName: string): YOLODetectorConfig {
		let config: YOLODetectorConfig;
		if (modelName === 'tiny-yolo-v2') {
			config = {
				...YOLOV2TinyConfig,
				modelURL: this.baseURL+'objectdetection/yolov2-tiny/model.json',
			};
		} else if (modelName === 'tiny-yolo-v3') {
			config = {
				...YOLOV3TinyConfig,
				modelURL: this.baseURL+'objectdetection/yolov3-tiny/model.json',
			};
		} else if (modelName === 'tiny-yolo-v2-lite') {
			config = {
				...YOLOLiteConfig,
				modelURL: this.baseURL+'objectdetection/yolov2-lite/model.json',
			};
		} else if (modelName === 'yolo-v3') {
			config = {
				...YOLOV3Config,
				modelURL: this.baseURL+'objectdetection/yolov3/model.json',
			};
		}
		return config;
	}
	public getClassifierConfig(modelName: string): ClassifierConfig {
		let config: ClassifierConfig;
		if (modelName === 'darknet-tiny') {
			config = {
				...darknetTinyConfig,
				modelURL: this.baseURL+'classifiers/darknet-tiny/model.json',
			};
		} else if (modelName === 'darknet-refrence') {
			config = {
				...darknetRefrenceConfig,
				modelURL: this.baseURL+'classifiers/darknet-reference/model.json',
			};
		} else if (modelName === 'darknet-19') {
			config = {
				...darknet19Config,
				modelURL: this.baseURL+'classifiers/darknet-19/model.json',
			};
		} else if (modelName === 'darknet-9000') {
			config = {
				...darknet9000Config,
				modelURL: this.baseURL+'classifiers/darknet-9000/model.json',
			};
		}
		return config;
	}

	public getAvailableDemos(): any[] {
		return [
			{
				title: 'Darknet Tiny',
				imgsrc: 'assets/img/classifier.jpg',
				description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
				type: 'Classifier',
				name: 'darknet-tiny',
			},
			{
				title: 'Tiny YOLO v2',
				imgsrc: 'assets/img/detector.jpg',
				description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
				type: 'Detector',
				name: 'tiny-yolo-v2',
			},
			{
				title: 'Darknet Refrence',
				imgsrc: 'assets/img/classifier2.jpg',
				description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
				type: 'Classifier',
				name: 'darknet-refrence',
			},
			{
				title: 'Tiny YOLO Lite',
				imgsrc: 'assets/img/detector2.jpg',
				description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
				type: 'Detector',
				name: 'tiny-yolo-v2-lite',
			},
			{
				title: 'Darknet19',
				imgsrc: 'assets/img/classifier.jpg',
				description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
				type: 'Classifier',
				name: 'darknet-19',
			},
			{
				title: 'Darknet9000',
				imgsrc: 'assets/img/classifier.jpg',
				description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
				type: 'Classifier',
				name: 'darknet-9000',
			},
			{
				title: 'Tiny YOLO v3',
				imgsrc: 'assets/img/detector3.jpg',
				description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
				type: 'Detector',
				name: 'tiny-yolo-v3',
			},
			{
				title: 'YOLO v3',
				imgsrc: 'assets/img/detector.jpg',
				description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
				type: 'Detector',
				name: 'yolo-v3',
			},
		];
	}

	public getSampleImages(): any[] {
		return [
			{ id: 0, src: 'assets/img/bird.jpg', name: 'bird' },
			{ id: 1, src: 'assets/img/cat.jpg', name: 'cat' },
			{ id: 2, src: 'assets/img/cat2.png', name: 'cat2' },
			{ id: 3, src: 'assets/img/citron-jardin.jpg', name: 'citron' },
			{ id: 4, src: 'assets/img/dog.jpg', name: 'dog' },
			{ id: 5, src: 'assets/img/eagle.jpg', name: 'eagle' },
			{ id: 6, src: 'assets/img/horses.jpg', name: 'horses' },
		];
	}
}
